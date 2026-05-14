---
title: "브랜드의 메시지를 고객의 언어로 전달하는 마케터"
description: "SEO와 콘텐츠, 데이터를 연결하여 실제 비즈니스 성과로 이어지는 마케팅을 지향합니다. 빠르게 변화하는 검색 및 AI 기반 환경 속에서도 브랜드의 방향성과 사용자 경험을 중심으로, 꾸준히 배우고 실행하며 성장하는 SEO 마케터입니다."
type: "portfolio"
draft: false
robotsNoIndex: true
outputs: ["HTML"]
sitemap:
  disable: true
---

<nav class="portfolio-side-nav" aria-label="포트폴리오 섹션 내비게이션">
  <a href="#career">Career</a>
</nav>

## Career

<section id="career" class="career-section" aria-label="경력">
  <article class="career-item">
    <div class="career-period">2019.03 – 2022.03</div>
    <div class="career-content">
      <h3>씨티애드 | 콘텐츠 마케터</h3>
      <p>브랜드 및 병·의원 대상 콘텐츠 마케팅 프로젝트 운영</p>
      <p>SEO 기반 콘텐츠 기획, 블로그/SNS 운영, 키워드 리서치 및 콘텐츠 성과 분석 업무 수행</p>
    </div>
  </article>

  <article class="career-item">
    <div class="career-period">2022.04 – 2024.02</div>
    <div class="career-content">
      <h3>꿀이유 | 브랜드 운영 (창업)</h3>
      <p>충남 지역 생산 꿀 브랜드 운영 및 스마트스토어 기반 판매 경험</p>
      <p>브랜드 기획, 제품 판매, 상세페이지 제작, 제품 촬영, 콘텐츠 제작 등 브랜드 운영 전반 업무 직접 수행</p>
      <ul>
        <li>스마트스토어 운영</li>
        <li>브랜드 아이덴티티 기획</li>
        <li>제품 상세페이지 제작</li>
        <li>제품 촬영 및 콘텐츠 제작</li>
        <li>온라인 판매 운영 및 고객 대응</li>
      </ul>
    </div>
  </article>

  <article class="career-item">
    <div class="career-period">2024.03 – Present</div>
    <div class="career-content">
      <h3>위볼린 | 콘텐츠 · SEO 마케터</h3>
      <p>SEO 기반 콘텐츠 마케팅 및 글로벌 프로젝트 운영</p>
      <p>adidas Korea / Japan, AB성형외과, 효성FMS 프로젝트 PM 및 SEO 운영 수행</p>
      <ul>
        <li>adidas KR / JP SEO 프로젝트 운영</li>
        <li>AB성형외과 글로벌 SEO 운영</li>
        <li>SEO 콘텐츠 전략 및 데이터 분석</li>
        <li>Adobe Analytics / GA4 / GSC 기반 모니터링</li>
        <li>AI 기반 콘텐츠 및 자동화 프로젝트 운영</li>
        <li>클라이언트 커뮤니케이션 및 프로젝트 매니징</li>
      </ul>
    </div>
  </article>
</section>

## 글로벌 성형외과 콘텐츠 캠페인

<section class="portfolio-chart-section" aria-label="글로벌 성형외과 콘텐츠 캠페인 월별 총합 추이">
  <div class="portfolio-chart-wrap">
    <h3>월별 총합 추이</h3>
    <div class="portfolio-chart-canvas">
      <canvas id="globalClinicTotalChart"></canvas>
    </div>
  </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>
  html {
    scroll-behavior: smooth;
  }

  body,
  .main,
  .post-single {
    background: #ffffff;
  }

  .portfolio-side-nav {
    position: fixed;
    top: 50%;
    right: 24px;
    z-index: 900;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    background: rgba(186, 230, 253, 0.72);
    border: 1px solid rgba(56, 189, 248, 0.34);
    border-radius: 16px;
    box-shadow: 0 12px 30px rgba(14, 116, 144, 0.14);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transform: translateY(-50%);
  }

  .portfolio-side-nav a {
    display: block;
    min-width: 86px;
    padding: 9px 12px;
    color: #075985;
    font-size: 0.92rem;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.62);
  }

  .portfolio-side-nav a:hover,
  .portfolio-side-nav a:focus {
    color: #0c4a6e;
    background: rgba(255, 255, 255, 0.86);
    outline: none;
  }

  .career-section {
    scroll-margin-top: 96px;
    display: grid;
    gap: 18px;
    margin: 28px 0 48px;
  }

  .career-item {
    display: grid;
    grid-template-columns: minmax(150px, 190px) minmax(0, 1fr);
    gap: 24px;
    padding: 24px;
    background: #ffffff;
    border: 1px solid rgba(15, 23, 42, 0.08);
    border-radius: 18px;
    box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
  }

  .career-period {
    color: #1f5aa6;
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1.5;
  }

  .career-content h3 {
    margin: 0 0 12px;
    color: #111827;
    font-size: 1.18rem;
    line-height: 1.35;
  }

  .career-content p {
    margin: 0 0 8px;
    color: #374151;
    line-height: 1.75;
  }

  .career-content ul {
    margin: 14px 0 0;
    padding-left: 20px;
    color: #374151;
  }

  .career-content li {
    margin: 6px 0;
    line-height: 1.65;
  }

  .portfolio-chart-section {
    margin: 32px 0 48px;
  }

  .portfolio-chart-wrap {
    width: 100%;
    max-width: 840px;
    margin: 0 auto;
    background: #ffffff;
    border: 1px solid rgba(15, 23, 42, 0.08);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 14px 38px rgba(15, 23, 42, 0.12);
    animation: portfolioFadeUp 900ms ease both;
  }

  .portfolio-chart-wrap h3 {
    margin: 0 0 24px;
    color: #111827;
    font-size: 1.25rem;
  }

  .portfolio-chart-wrap canvas {
    position: absolute;
    inset: 0;
    display: block;
    width: 100% !important;
    height: 100% !important;
  }

  .portfolio-chart-canvas {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  @keyframes portfolioFadeUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .portfolio-chart-wrap {
      animation: none;
    }
  }

  @media (max-width: 720px) {
    .portfolio-side-nav {
      top: auto;
      right: 16px;
      bottom: 18px;
      padding: 10px;
      transform: none;
    }

    .portfolio-side-nav a {
      min-width: 76px;
      padding: 8px 10px;
      font-size: 0.86rem;
    }

    .career-item {
      grid-template-columns: 1fr;
      gap: 10px;
      padding: 20px;
      border-radius: 16px;
    }

    .portfolio-chart-wrap {
      padding: 20px;
      border-radius: 16px;
    }

    .portfolio-chart-canvas {
      aspect-ratio: 16 / 9;
    }
  }
</style>

<script>
  window.addEventListener("DOMContentLoaded", function () {
    const chartElement = document.getElementById("globalClinicTotalChart");

    if (!chartElement || typeof Chart === "undefined") {
      return;
    }

    const labels = [
      "25.01", "25.02", "25.03", "25.04",
      "25.05", "25.06", "25.07", "25.08",
      "25.09", "25.10", "25.11", "25.12",
      "26.01", "26.02", "26.03", "26.04"
    ];

    const totals = [
      19350, 19035, 21820, 21185,
      19576, 16520, 19195, 18604,
      18799, 19745, 20375, 23403,
      24441, 17962, 19681, 19629
    ];

    new Chart(chartElement, {
      type: "line",
      data: {
        labels: labels,
        datasets: [{
          label: "총합",
          data: totals,
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.15)",
          borderWidth: 4,
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 8,
          pointBackgroundColor: "#2563eb",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: "index"
        },
        plugins: {
          legend: {
            labels: {
              color: "#111827",
              font: {
                size: 14,
                weight: "bold"
              }
            }
          },
          tooltip: {
            backgroundColor: "#111827",
            callbacks: {
              label: function (context) {
                return " " + context.raw.toLocaleString() + "건";
              }
            }
          }
        },
        animation: {
          duration: 2200,
          easing: "easeOutQuart"
        },
        scales: {
          x: {
            ticks: {
              color: "#374151"
            },
            grid: {
              display: false
            }
          },
          y: {
            ticks: {
              color: "#374151",
              callback: function (value) {
                return value.toLocaleString();
              }
            },
            grid: {
              color: "rgba(0, 0, 0, 0.06)"
            }
          }
        }
      }
    });
  });
</script>

## 일본 이커머스 SEO 운영 리포트 및 글로벌 협업

### 프로젝트 개요

일본 이커머스 사이트의 SEO 운영 흐름을 주간 리포트, 트래픽 모니터링, 글로벌 SEO팀 협업, AI 쇼핑 리서치까지 연결해 정리한 케이스입니다.

단순히 보고서를 작성하는 데서 끝내지 않고, 어떤 변화가 있었는지와 다음 실행 항목이 무엇인지 구분해 운영 우선순위를 잡는 데 초점을 맞췄습니다.

### 문제

일본 이커머스 운영에서는 신규 콜라보, 펫 컬렉션, 프로모션, PDP 테스트처럼 여러 이슈가 동시에 움직였습니다.

이 때문에 단일 지표만 보면 트래픽 상승 원인을 분리하기 어렵고, 글로벌팀 논의 사항과 로컬 운영 액션을 따로 관리하면 후속 작업이 끊길 수 있는 상황이었습니다.

### 실행

#### 1. GSC 기준 트래픽 변화 정리

Search Console 데이터를 기준으로 주간 트래픽 흐름을 확인하고, 신규 콜라보 관련 상승 구간과 펫 컬렉션 관련 흐름을 분리해 정리했습니다.

전주 대비 변화가 있는 구간은 별도로 표시해, 단순 증감이 아니라 어떤 카테고리와 이슈에서 움직임이 발생했는지 확인할 수 있게 했습니다.

#### 2. 데이터 시트 기준 정비

주간·월간 보고에서 같은 지표를 다르게 해석하지 않도록 필터링 조건과 확인 기준을 통일했습니다.

보고용 데이터 시트를 정리해 이후 NLG 업데이트, PDP 테스트, PLP 업데이트 같은 후속 작업으로 바로 연결될 수 있는 형태로 만들었습니다.

#### 3. 글로벌 SEO팀 협업 항목 분리

글로벌 SEO팀 미팅에서 논의된 PDP 테스트와 운영 업데이트 항목을 검토 필요 항목과 실행 가능 항목으로 나눴습니다.

로컬 운영에서 바로 반영할 수 있는 작업과 추가 확인이 필요한 작업을 분리해 다음 주 액션으로 정리했습니다.

#### 4. AI 쇼핑 리서치 반영 포인트 정리

AI 쇼핑 관련 변화와 참고 사례를 조사해, 향후 이커머스 SEO에서 검토해야 할 포인트를 정리했습니다.

검색 결과 노출 방식이 바뀔 때 상품 상세 페이지, 카테고리 페이지, 구조화된 콘텐츠가 어떤 역할을 할 수 있는지 운영 관점에서 검토했습니다.

### 결과

- 신규 콜라보 트래픽 상승 구간과 펫 컬렉션 흐름을 분리해 후속 모니터링 기준으로 정리
- 일본 이커머스 주간·월간 보고에 사용할 데이터 필터링 조건 통일
- 글로벌 SEO팀 미팅 후속 액션을 PDP 테스트, NLG 전달, PLP 업데이트로 구분
- AI 쇼핑 변화에 대응하기 위한 이커머스 SEO 검토 포인트 정리

### 사용한 데이터와 도구

- Google Search Console
- GA4
- 주간·월간 SEO 리포트
- 글로벌 SEO팀 미팅 노트
- AI 쇼핑 리서치 자료

### 배운 점

이커머스 SEO 운영에서는 트래픽 변화를 확인하는 것만큼, 변화 원인을 실행 단위로 나눠 관리하는 것이 중요했습니다.

특히 글로벌팀과 로컬 운영이 함께 움직이는 프로젝트에서는 보고서가 단순 공유 문서가 아니라 다음 실행을 정리하는 운영 도구가 되어야 합니다.
