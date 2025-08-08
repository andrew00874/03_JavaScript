const fs = require("fs").promises;
const puppeteer = require("puppeteer");

const searchQuery = "대한민국";

const SELECTORS = {
  SEARCH_INPUT: "#searchInput",
  SUBMIT_BUTTON: ".pure-button.pure-button-primary-progressive",
  PAGE_TITLE: "#firstHeading",
  CONTENT_PARAGRAPHS: "#mw-content-text .mw-parser-output p",
};

async function crawlWikipedia() {
  console.log(`'${searchQuery}'에 대한 위키백과 검색을 시작합니다...`);
  // page 변수도 browser와 함께 외부에 선언하여 catch 블록에서 접근 가능하도록 합니다.
  let browser, page;

  try {
    browser = await puppeteer.launch({ headless: "new" });
    // page 변수 선언 시 const 대신 대입만 하도록 수정
    page = await browser.newPage();

    await page.goto("https://wikipedia.org/");
    console.log("위키백과 페이지에 접속했습니다.");

    await page.type(SELECTORS.SEARCH_INPUT, searchQuery);
    console.log(`검색창에 '${searchQuery}'를 입력했습니다.`);

    console.log("검색 버튼을 기다립니다...");
    await page.waitForSelector(SELECTORS.SUBMIT_BUTTON, { visible: true });
    await page.click(SELECTORS.SUBMIT_BUTTON);
    console.log("검색 버튼을 클릭했습니다.");

    await page.waitForNavigation();
    console.log("결과 페이지로 이동했습니다.");

    const articleData = await page.evaluate((selectors) => {
      const title = document.querySelector(selectors.PAGE_TITLE)?.innerText;
      const paragraphs = Array.from(
        document.querySelectorAll(selectors.CONTENT_PARAGRAPHS)
      );
      const firstParagraph = paragraphs.find(
        (p) => p.innerText.trim() !== ""
      )?.innerText;

      return {
        title: title || "제목을 찾을 수 없습니다.",
        summary: firstParagraph || "요약 정보를 찾을 수 없습니다.",
      };
    }, SELECTORS);

    await fs.writeFile(
      "wikipedia_result.json",
      JSON.stringify(articleData, null, 2)
    );
    console.log("크롤링 완료! wikipedia_result.json 파일이 생성되었습니다.");
  } catch (error) {
    console.error("크롤링 중 오류가 발생했습니다:", error.name); // 에러 이름만 출력하여 간결하게 확인
    if (page) {
      await page.screenshot({ path: "error_screenshot.png" });
      console.log(
        "에러 스크린샷을 'error_screenshot.png'로 저장했습니다. 파일을 확인하여 실제 화면을 분석하세요."
      );
    }
  } finally {
    if (browser) {
      await browser.close();
      console.log("브라우저를 종료했습니다.");
    }
  }
}

crawlWikipedia();
