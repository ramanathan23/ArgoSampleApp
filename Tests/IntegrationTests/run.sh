echo $(ls /)
echo $(ls /app)
python -m pytest --html=report.html /app
echo $(ls /)
echo $(ls /app)
cp assets /app/testresults
cp *.html /app/testresults
echo $(ls /app)
echo $(ls /app/testresults)