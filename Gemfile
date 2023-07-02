source "https://rubygems.org"

# gem "liquid", "> 4.0.3"

# if you are using other than GitHub Pages,
#gem "jekyll", "~> 3.9.0", group: :jekyll_plugins

# If you have any plugins, put them here!
# group :jekyll_plugins do
  gem "jekyll-paginate", "~> 1.1.0"
  gem "jekyll-redirect-from", "~> 0.16.0"
# end

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# all supported plugins by GitHub Pages are included in "github-pages". (GitHub Pages doesn't support 3rd party plugins)

# gem "github-pages", "~> 227"
gem 'github-pages', group: :jekyll_plugins

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0", :install_if => Gem.win_platform?

# HTTP server for local tests
gem "webrick", "~> 1.7"

# Detects changes in the file system and runs a build script to reflect the changes. like dynamic application, React
# TODO: because of build is slow, I want to use guard-jekyll-plus
# gem 'guard-jekyll-plus'
# gem 'guard'
