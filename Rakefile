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

file 'target/world.js' => ['target'] + Dir.glob("app/*.js") do
    `cat app/*.js > target/world.js`
end

task :default => ['target', 'target/world.js'] + htmls  do
end
