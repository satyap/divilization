task :default do
    Dir.glob("app/*.haml").each do |f|
        `mkdir target`
        o = f.gsub(/haml$/, 'html').gsub(/^app/, 'target/')
        `haml #{f} > #{o}`
    end
end
