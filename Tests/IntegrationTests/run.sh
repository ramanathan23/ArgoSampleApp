echo $(ls /)
echo $(ls /app)
python -m pytest --html=report.html /app
echo $(ls /)
echo $(ls /app)
cp *.html /app/testresults
echo $(ls /app)