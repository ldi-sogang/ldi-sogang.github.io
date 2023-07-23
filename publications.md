---
title: Publications
layout: publications
description: Publications
bodyClass: page-about
---
{% assign posts_by_year = site.data.publications | group_by:"year" | sort: "name" | reverse %}

{% assign conference_count = 0 %}
{% assign journal_count = 0 %}
{% assign workshop_count = 0 %}
{% assign preprint_count = 0 %}

{% for paper in site.data.publications %}

{% if paper.type == "conference" %}
{% assign conference_count = conference_count | plus: 1 %}
{% endif %}

{% if paper.type == "journal" %}
{% assign journal_count = journal_count | plus: 1 %}
{% endif %}

{% if paper.type == "workshop" %}
{% assign workshop_count = workshop_count | plus: 1 %}
{% endif %}

{% if paper.type == "preprint" %}
{% assign preprint_count = preprint_count | plus: 1 %}
{% endif %}
{% endfor %}

{% for year in posts_by_year %}
> ## {{ year.name }}

{{ year.items }}
{% for item in year.items reversed %}
**[{% if item.type == "conference" %}C{{ conference_count }}{% assign conference_count = conference_count | minus: 1 %}{% endif %}{% if item.type == "journal" %}J{{ journal_count }}{% assign journal_count = journal_count | minus: 1 %}{% endif %}{% if item.type == "workshop" %}W{{ workshop_count }}{% assign workshop_count = workshop_count | minus: 1 %}{% endif %}] {{ item.title }}**
<br>
{{ item.authors }}
<br>
{{ item.venue }}
{% endfor %}
{% endfor %}