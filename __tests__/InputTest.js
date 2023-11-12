import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../src/InputView.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const expectThrowErrorAsync = async (received) => {
  await expect(received).rejects.toThrow("[ERROR]");
};

describe("날짜 입력 테스트", () => {
  beforeAll(() => {
    mockQuestions(["10", "", "abc", "11.3", "32"]);
  });

  test("사용자가 날짜를 입력하면 숫자로 반환한다.", async () => {
    const input = await InputView.readDate();
    expect(input).toEqual(10);
  });

  test("사용자가 날짜를 입력하지 않으면 에러를 던진다.", async () => {
    await expectThrowErrorAsync(InputView.readDate());
  });
  test("사용자가 숫자가 아닌 문자를 입력하면 에러를 던진다.", async () => {
    await expectThrowErrorAsync(InputView.readDate());
  });
  test("사용자가 자연수가 아닌 수를 입력하면 에러를 던진다.", async () => {
    await expectThrowErrorAsync(InputView.readDate());
  });
  test("사용자가 1보다 작거나 31보다 큰 숫자를 입력하면 에러를 던진다.", async () => {
    await expectThrowErrorAsync(InputView.readDate());
  });
});

describe("주문 입력 테스트", () => {
  test("사용자의 주문을 리스트 형태로 반환한다.", async () => {
    mockQuestions(["해산물파스타-2,레드와인-1"]);

    const input = await InputView.readOrder();
    expect(input).toEqual([
      ["해산물파스타", 2],
      ["레드와인", 1],
    ]);
  });
});

describe("주문 입력 예외 테스트", () => {
  const invalidFormats = [
    "",
    "바비큐립-1 초코케이크-2",
    "해산물파스타 2, 레드와인 1",
    "제로콜라, 샴페인",
  ];

  beforeAll(() => {
    mockQuestions([...invalidFormats, "바비큐립-1,바비큐립-3"]);
  });

  invalidFormats.forEach(() => {
    test("주문이 유효한 형식이 아니면 에러를 던진다.", async () => {
      expectThrowErrorAsync(InputView.readOrder());
    });
  });

  test("주문 메뉴가 중복되면 에러를 던진다.", async () => {
    expectThrowErrorAsync(InputView.readOrder());
  });
});
