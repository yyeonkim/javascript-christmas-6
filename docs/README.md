# 🎯목표

클래스(객체)를 분리하는 연습

# 기능 목록

올해 12월에 크리스마스 이벤트를 진행한다.

## ✨ 이벤트

- 총주문 금액 **10,000**원 이상부터 이벤트를 적용한다.
- 기간에 따라 이벤트 별 할인 금액을 계산한다.
- 총혜택 금액을 계산한다.
  - 총혜택 금액 = 할인 금액의 합계 + 증정 메뉴의 가격
- 방문 날짜의 요일을 계산한다.

### 크리스마스 디데이 할인

- 이벤트 기간: 2023.12.1 ~ 2023.**12.25**
- 날짜에 따라 크리스마스 디데이 할인 가격을 계산한다.
- 1,000원으로 시작하여 크리스마스가 다가올수록 날마다 할인 금액이 100원씩 증가한다.
- 총주문 금액에서 해당 금액만큼 할인한다.
  (e.g. 시작일인 12월 1일에 1,000원, 2일에 1,100원, ..., 25일엔 3,400원 할인)

### 나머지 이벤트

- 이벤트 기간: '크리스마스 디데이 할인'을 제외한 다른 이벤트는 2023.12.1 ~ 2023.**12.31** 동안 적용

#### 평일 할인

- 요일에 따라 평일 할인 금액을 계산한다.
- 유효 기간: 평일(일요일~목요일)
- **디저트 메뉴**를 메뉴 1개당 2,023원 할인

#### 주말 할인

- 요일에 따라 주말 할인 금액을 계산한다.
- 유효 기간: 주말(금요일, 토요일)
- **메인 메뉴**를 메뉴 1개당 2,023원 할인

#### 특별 할인

- 별이 있는 날(일요일 + 크리스마스)에 할인을 적용한다.
- 이벤트 달력에 별이 있으면 총주문 금액에서 1,000원 할인

#### 증정 이벤트

- 총주문 금액이 **12만원** 이상이면 증정품을 준다.
- 증정품은 25000원 상당의 샴페인 1개이다.

## 기간

- 방문 날짜가 크리스마스를 안 지났는지 계산한다.
- 방문 날짜가 평일인지 계산한다.
- 방문 날짜가 주말인지 계산한다.
- 방문 날짜가 일요일인지 계산한다.
- 방문 날짜가 크리스마스인지 계산한다.

## 🍴 주문

- 총주문 금액을 계산한다.
- 유형별로 주문한 메뉴의 개수를 센다.

### ❗제한사항

- **음료**만 주문 시, 주문할 수 없다.

```
[ERROR] 음료만 주문할 수 없습니다. 다시 주문해 주세요.
```

- 메뉴는 한 번에 최대 **20**개까지만 주문할 수 있다.  
  (e.g. 시저샐러드-1, 티본스테이크-1, 크리스마스파스타-1, 제로콜라-3, 아이스크림-1의 총개수는 7개)

```
[ERROR] 메뉴는 최대 20개까지만 주문할 수 있습니다. 다시 주문해 주세요.
```

## 메뉴

- 메뉴의 가격, 수량에 따라 금액을 계산한다.
- 메뉴의 유형을 알려준다. (ex. 음료, 메인)

## 배지

**총혜택 금액**에 따라 이벤트 배지를 부여한다.

- 총혜택 금액 = 할인 금액의 합계 + 증정 메뉴의 가격

```
5천 원 이상: 별
1만 원 이상: 트리
2만 원 이상: 산타
그 외: 없음
```

## 결제

[총주문 금액]과 [총혜택 금액]에 따라 할인 후 예상 결제 금액을 계산한다.

- `할인 후 예상 결제 금액 = 할인 전 총주문 금액 - 할인 금액`

## 입력

### 방문 날짜

사용자의 방문 날짜를 입력받는다.

```
12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)
26
```

#### ❗제한사항

- 날짜가 입력되지 않으면

```
[ERROR] 날짜가 입력되지 않았습니다. 다시 입력해 주세요.
```

- 날짜가 숫자가 아니면
- 날짜가 자연수가 아니면
- 날짜가 **1 이상 31 이하**가 아니면

```
[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.
```

### 주문할 메뉴와 개수

사용자의 주문을 입력받는다.

```
주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)
타파스-1,제로콜라-1
```

#### ❗제한사항

- 메뉴를 입력하지 않으면
- 고객이 메뉴판에 없는 메뉴를 입력하면
- 메뉴의 개수가 **1 이상의 숫자**가 아니면
- 메뉴 형식이 예시와 다르면
- **중복** 메뉴를 입력한 경우(e.g. 시저샐러드-1,시저샐러드-1)

```
 [ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.
```

## 출력

### 주문 메뉴

- 사용자가 주문한 메뉴를 출력한다.
- 주문 메뉴의 출력 순서는 자유롭게 출력한다.

```
<주문 메뉴>
타파스 1개
제로콜라 1개
```

### 할인 전 총주문 금액

- 할인 전 총주문 금액을 출력한다.

```
<할인 전 총주문 금액>
8,500원
```

### 증정 메뉴

- 증정 메뉴를 출력한다.

```
<증정 메뉴>
샴페인 1개
```

- 증정 이벤트에 해당하지 않는 경우, 증정 메뉴 `없음`으로 보여 준다.

```
<증정 메뉴>
없음
```

### 혜택 내역

각 이벤트 별 할인 금액을 출력한다.

```
<혜택 내역>
크리스마스 디데이 할인: -1,200원
평일 할인: -4,046원
특별 할인: -1,000원
증정 이벤트: -25,000원
```

- 고객에게 **적용된 이벤트 내역만** 보여준다.
- 혜택 내역에 여러 개의 이벤트가 적용된 경우, 출력 순서는 자유롭게 출력한다.
- 적용된 이벤트가 하나도 없다면 혜택 내역 `없음`으로 보여준다.

```
<혜택 내역>
없음
```

### 총혜택 금액

- 총혜택 금액을 출력한다.
- 0원이면 그대로 출력하고, 0이상이면 '-' 마이너스를 붙인다.

```
<총혜택 금액>
-31,246원
```

```
<총혜택 금액>
0원
```

### 할인 후 예상 결제 금액

할인 후 예상 결제 금액 = 할인 전 총주문 금액 - 할인 금액

```
<할인 후 예상 결제 금액>
135,754원
```

### 12월 이벤트 배지

총혜택 금액에 따라 이벤트 배지의 이름을 다르게 보여준다.

```
<12월 이벤트 배지>
산타
```

```
<12월 이벤트 배지>
없음
```
