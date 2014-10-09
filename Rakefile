require 'jasmine'
load 'jasmine/tasks/jasmine.rake'

hamls = Dir.glob("app/*.haml")
htmls = []
hamls.each do |hamlfile|
    outfile = hamlfile.gsub(/haml$/, 'html').gsub(/^app\//, 'target/')
    htmls << outfile
    file outfile => ['target', hamlfile] do
        `haml #{hamlfile} > #{outfile}`
    end
end

directory 'target'

desc 'Build the javascript'
file 'target/world.js' => ['target'] + Dir.glob("app/*.js") do
    `cat app/*.js > target/world.js`
end

desc 'Build the game'
task :build => ['target', 'target/world.js'] + htmls

desc 'Build and test the game'
task :default => ['build', 'jasmine:ci']

desc 'Remove build artifacts'
task :clean do
    FileUtils.rm_r('target')
end
