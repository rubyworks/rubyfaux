#!/usr/bin/env ruby

root = '.'

use Rack::Static, :urls=>{'/'=>'index.html'}, :root => root
run Rack::Directory.new(root)

