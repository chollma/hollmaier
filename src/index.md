---
title: Cooper Hollmaier
description: "Product manager, consultant, speaker, educator, and accessiblity advocate."
layout: "base.njk"
---

## What I do
I'm a human-obsessed problem solver who believes that accessibility is a human right. I'm deeply passionate about continuous learning, building relationships, and co-creating exceptional experiences that everyone can participate in.
## What I've done
### Currently
- 4 years at Recreational Equipment, Inc. in Program and Product Management Roles. Currently: Leading the mission to improve REI’s accessibility maturity.

- 2 years at Iowa State University: Teaching an experimental course on Search Engine Optimization for Journalism, Public Relations, and Advertising students.

### Previously

- 4 years of architecting and optimizing search engine optimization strategies for local and national brands.

## Honors & awards
- Deque: 2022 Accessibility Culture Award
- REI: 2021 Anderson Award Nominee
- REI: 2020 Anderson Award Nominee
## Recent Posts
{% for post in collections.posts %}
- [{{post.data.title}}]({{post.url}})
{% endfor %}