---
title: Cooper Hollmaier
description: "Product leader, speaker, mentor, and accessibility advocate."
layout: "base.njk"
---
## About
{% include 'profile.njk' %}

<!--## Featured Work-->

## Articles & Press Mentions
{% for post in collections.posts %}
- Post: [{{post.data.title}}]({{post.url}})
{% endfor %}
- Post: [Accessibility and SEO - The A11y Project](https://www.a11yproject.com/posts/accessibility-seo/)
- Video: [An Introduction to Accessibility and SEO - Moz](https://moz.com/blog/seo-and-accessibility-introduction)
- Video: [SEO and Accessibility: Content - Moz](https://moz.com/blog/seo-and-accessibility-content)
- Video: [SEO and Accessibility: Technical - Moz](https://moz.com/blog/technical-seo-and-accessibility)
- Post: [Getting started with TalkBack on Android - The A11y Project](https://www.a11yproject.com/posts/getting-started-talkback/)
- Talk: [Accessible Systems: Shipping Software that Enables by Default - CSUN](https://www.csun.edu/cod/conference/sessions/index.php/public/presentations/view/1403)
- Post: [Automated Accessibility Testing: From Passive to Preventative - REI Co-op Engineering](https://engineering.rei.com/frontend/automated-accessibility-testing.html)
- Case Study: [How REI’s systems thinking approach helps scale accessibility across teams](https://makeitfable.com/how-rei-scales-accessibility-across-multiple-product-teams/)
