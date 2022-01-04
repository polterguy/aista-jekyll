
# Aista Jekyll Theme

This is a Jekyll theme created for Aista, Ltd, and more specifically [Magic Cloud](https://polterguy.github.io/) to
document our project(s). If you want to use it for your own sites, you're welcome to do so under the terms of 
Creative Commons Attribution-ShareAlike version 4, implying you'll have to keep the link to our web site. Below
is a screenshot of the theme in use over at [Magic Cloud's documentation site](https://polterguy.github.io/).

![Screenshot of theme](https://raw.githubusercontent.com/polterguy/aista-jekyll/master/screenshot.jpg)


## Installation

To use the theme add something resembling the following to your YAML configuration file _"\_config.yml"_.

```
remote_theme: polterguy/aista-jekyll
permalink: /blog/:title
title: Title of your site
description: Slogan of your site
google_analytics: UA-123456789-1
copyright: © Foo, Ltd 2022
mwr: /section-1/foo
mwr_text: Foo 1
og_image: https://some-url.com/to-open-graph-image.jpeg
nav_sections:
  - name: Section 1
    items:
      - url: /section-1/foo
        name: Foo 1
      - url: /section-1/bar
        name: Foo 2
  - name: Section 2
    items:
      - url: /section-2/
        name: Another foo
```

The `remote_theme` parts needs to be exactly as above, the rest is intended for configuring your site, and include
Google Analytics tracking codes, MWR (_"Most Wanted Response"_, a link on your site being the most important navigation hyperlink),
and navigation sections, etc. The navigation sections becomes a navbar that you can toggle at the top of your page
using a hamburger button.

## Usage

The theme is blog aware, assuming you save your blog posts into your _"\_posts"_ folder. To list your blog items, create
an HTML page and store at your root folder called for instance _"blog.html"_, and fill it with the following content.

```html
---
layout: default
title: The title of your blog
---
<h1>The title of your blog</h1>

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
```

To create a single blog item, create a file called for instance _"2022-01-04-new-documentation-website.md"_ and store it
into your _"\_posts"_ folder and fill it as follows.

```markdown
---
layout: post
author: thomas
---

Welcome to our new documentation website for Magic Cloud. Hopefully this will make it easier for you
to find the relevant documentation you are looking for. This site is hosted by GitHub, and we created
our [own custom Jekyll Theme](https://github.com/polterguy/aista-jekyll) for it, which you are free
to use as you see fit for your own needs, since we released the theme to the public under the terms
of Creative Commons Attribution ShareAlike, allowing you to use it for free as long as you provide
a backlink to our site.
```

## License

The theme is freely available as open source under the terms of the [Creative Commons Attribution-ShareAlike 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/legalcode).

