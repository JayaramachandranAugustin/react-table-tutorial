import csv
import json

with open('movies.csv', newline='', encoding='utf-8') as f:
    fieldnames = ("movies","year","genre","rating","onelines","stars","votes","runtime","gross")
    reader = csv.DictReader(f,fieldnames)
    datajsonfile = open('data.json', 'w')
    datajsonfile.write('[')
    index=0
    for row in reader:
        if index<200:
            if index !=0:
                if index > 1:
                    datajsonfile.write(',\n')
                row['id'] = index
                json.dump(row, datajsonfile,indent=3)
            index+=1

    datajsonfile.write(']')
