---
layout: default
permalink: /snupc/
title: SNUPC
nav: true
nav_order: 4
pretty_table: true
---

# SNUPC

**서울대학교 프로그래밍 경시대회(SNUPC)**는 [2007년 시작](https://algospot.com/forum/read/139/)되어([2007년 문제](/assets/pdf/snupc0_2007.pdf)), 매년 서울대학교의 모든 학생들을 대상으로 개최되는 알고리즘 문제 해결 대회입니다.

개인 대회로 진행되며, 주어진 시간 내에 정해진 문제들을 많이 풀어내는 것으로 경쟁합니다. 주로 자료구조, 알고리즘, 수학 지식과 아이디어를 활용하여 알고리즘을 설계하고 프로그램을 작성하게 됩니다.

2016년부터는 SNUPS 회원들이 직접 문제와 데이터를 준비하고 기업의 후원을 받아 상품도 마련하고 있습니다.

---

## SNUPC 2024 [공지](/snupc2024/) 및 [신청](https://forms.gle/FREhW8k7QWeAQzjs9)
![SNUPC 2024](/assets/img/poster/snupc2024.jpg){:style="width:600px; max-width:100%;"}

---

## 과거 대회들

이 페이지에 등록되지 않은 과거 대회, 결과, 풀이, 문제, 각종 링크 등은 [{{ site.email }}](mailto:{{ site.email }})로 제보해주시면 감사하겠습니다.

<table id="table-snupc" data-toggle="table" data-url="{{ '/assets/json/snupc-links.json' | relative_url }}">
  <thead>
    <tr>
      <th data-field="announce" data-align="center">공지 (대회)</th>
      <th data-field="result" data-align="center">결과</th>
      <th data-field="solution" data-align="center">풀이</th>
      <th data-field="problem" data-align="center">문제</th>
    </tr>
  </thead>
</table>

<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script>
$(document).ready(function() {
  $('#table-snupc').bootstrapTable({
    columns: [{ field: 'announce', align: 'center',
      formatter: function(value, row, index) {
        let year = value ? `<a href="${value}" target="_blank">${row.year}</a>` : row.year;
        if (row.div1contest && row.div2contest) return `${year} (<a href="${row.div1contest}" target="_blank">Div1</a> <a href="${row.div2contest}" target="_blank">Div2</a>)`;
        if (row.contest) return `${year} (<a href="${row.contest}" target="_blank">대회</a>)`;
        return year;
      }
    }, { field: 'result', align: 'center',
      formatter: function(value, row, index) {
        if (value) return `<a href="${value}" target="_blank">결과</a>`;
        if (row.div1result && row.div2result) return `<a href="${row.div1result}" target="_blank">Div1</a> <a href="${row.div2result}" target="_blank">Div2</a>`;
        return '';
      }
    }, { field: 'solution', align: 'center',
      formatter: function(value, row, index) {
        return value ? `<a href="${value}" target="_blank">풀이</a>` : '';
      }
    }, { field: 'problem', align: 'center',
      formatter: function(value, row, index) {
        return value ? `<a href="${value}" target="_blank">문제</a>` : '';
      }
    }]
  });
});
</script>

---

## 후원 및 문의
후원 또는 대회에 관한 모든 문의는 [{{ site.email }}](mailto:{{ site.email }})로 메일 부탁드립니다. SNUPC에 대한 관심에 감사드립니다.
