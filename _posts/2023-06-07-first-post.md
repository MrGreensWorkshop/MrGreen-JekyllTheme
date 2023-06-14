---
layout: post
title: Github Jekyll Project
date: 2023-06-07
---

Demo using the Minima theme:

1. Buat Repository Baru:
   - Klik tanda + di pojok kanan atas dan pilih new repositroy.
   - Berikan nama repositroy
   - Ceklist a README option
   - klik tombol create repositroy.
2. Buat _config.yml file untuk setup jekyll:
   - Klik add file dan pilih create new file.
   - Name the file _config.yml.
   - Add the basic YAML fields required by Jekyll:
   
      ![jekyll](/newblog/image/jekyll.png)
      
3. Buat file about.md untuk halaman about
   - Klik create new file
   - Name the file about.md
   - At the top of the file add YAML Front Matter. Add some content. For example:
   
      ![jekyll1](/newblog/image/jekyll1.png)
   
4. Activate gh-pages:
   - Klik tab setting repository
   - Klik pages
   - Click Source, select Master branch, and click Save.
   - Wait for a minute for gh-pages to build. The live link will appear in the options.
   
5. Add Blog Post:
   -  Klik create new file
   -  Buat directory baru dengan ketik post/. nama bidang akan update.
   -  Ketik nama file dengan format yyyy-mm-dd-post.md.
   -  Add YAML Front Matter and some content, for example
   
      ![jekyll2](/newblog/image/jekyll2.png)
