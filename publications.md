---
title: Publications
layout: publications
description: Publications
bodyClass: page-about
---

buru

{% assign posts_by_year = site.data.publications | group_by:"year" | sort: "name" | reverse %}

{% assign conference_count = 0 %}
{% assign journal_count = 0 %}
{% assign workshop_count = 0 %}
{% assign preprint_count = 0 %}