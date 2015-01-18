#!/usr/bin/env ruby

ignore 'website', 'heroku'

#include ShellUtils #why does this not work ?

#
# Run thin server to give site a spin.
#
desc "start thin server"
task "serve" do
  sh "thin start -A file"
end

#
# Compile Handlebar.js templates.
#
desc "compile hnadle bar templates"
task 'compile' do
  sh "handlebars source/handlebars/*.handlebars -f assets/javascripts/handlebars.templates.js"
end

#
# The publish task uses the detroit-github plugin
# from the Detroit project.
#
desc 'prepare'
task 'prepare' do
  github.prepare
end

desc 'publish'
task 'publish' do
  #mkdir_p 'website'
  #cp   'index.html', 'website/'
  #cp   'doc.json',   'website/'
  #cp_r 'assets',     'website/'
  github.publish 
end

#
# Helper method create Detroit::GitHub instace.
#
def github
  @github ||= (
    require 'detroit'
    require 'detroit-github'
     Detroit::GitHub.new(
      :folder  => 'website'
      #:sitemap => {
      #  'index.html' => 'index.html',
      #  'doc.json'   => 'doc.json',
      #  'assets'     => 'assets'
      #}
    )
  ) 
end

# Copy project files in website directory.
desc 'update website files'
task 'web:update' do
  mkdir_p 'website'
  install 'index.html', 'website/index.html'
  install 'doc.json', 'website/doc.json'
  sync 'assets', 'website/assets'
end

desc 'publish website'
task 'web:publish' => ['web:update'] do
  cd 'website' do
    sh 'git add index.html doc.json assets'
    sh 'git commit -a -m "Automatic update."'
    sh 'git push origin gh-pages'
  end
end

desc 'publish to heroku'
task 'heroku' do
  mkdir_p 'heroku'
  install 'index.html', 'heroku/index.html'
  install 'doc.json', 'heroku/doc.json'
  sync 'assets', 'heroku/assets'

  cd 'heroku' do
    sh 'git add index.html doc.json assets'
    sh 'git commit -a -m "Automatic update."'
    sh 'git push orgin master'
  end
end

file 'source/handlebars/*.handlebars' do
  run :compile
end

#group :web do
#  file 'assets' do |paths|
#    sync 'assets', 'website/assets'
#  end
#
#  file 'index.html' do
#    install 'index.html', 'website/index.html'
#  end
#end

