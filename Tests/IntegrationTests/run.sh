python -m pytest --html=report.html /app
cp -R assets /app/testresults/assets
cp *.html /app/testresults