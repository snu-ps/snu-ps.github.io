---
layout: page
title: 기록
permalink: /records/
nav: true
nav_order: 2
pretty_table: true
---

## 개인 대회 수상

<table
  data-height="880"
  data-pagination="true"
  data-search="true"
  data-page-size="20"
  data-page-list="[20, 50, all]"
  data-url="{{ '/assets/json/awards-individual.json' | relative_url }}"
  data-row-style="rowStyle"
>
  <thead>
    <tr>
      <th data-field="name" data-halign="center" data-align="center" data-sortable="true">이름</th>
      <th data-field="contest" data-halign="center" data-align="center" data-sortable="true">대회명</th>
      <th data-field="rank" data-halign="center" data-align="center" data-sortable="true">상격 (순위)</th>
    </tr>
  </thead>
</table>


## 팀 대회 수상

<table
  data-height="880"
  data-pagination="true"
  data-search="true"
  data-page-size="20"
  data-page-list="[20, 50, all]"
  data-url="{{ '/assets/json/awards-team.json' | relative_url }}"
  data-row-style="rowStyle"
>
  <thead>
    <tr>
      <th data-field="name" data-halign="center" data-align="center" data-sortable="true">팀명 (이름)</th>
      <th data-field="contest" data-halign="center" data-align="center" data-sortable="true">대회명</th>
      <th data-field="rank" data-halign="center" data-align="center" data-sortable="true">상격 (순위)</th>
    </tr>
  </thead>
</table>

<script>
  function rowStyle(row, index) {
    return { css: { padding: "5px 10px" } };
  }
</script>
