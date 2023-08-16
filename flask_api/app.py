# Import the dependencies.
import json
import csv
import pandas as pd
import numpy as np
import datetime as dt
import sqlalchemy 
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

import flask
from flask import Flask , jsonify

#Link to postgreSQL?? or MongoDb or Sqlflite
# engine = create_engine("DB URL")
#reflect an existing databse into a new model
# Base = automap_base()
#refect the tables
# Base.prepare(autoload_with=engine)
#check the contents
# print(Base.classes.keys())

import csv


################################ API code#######

#################################################
# Flask Routes
#################################################
# #################################################
app = Flask(__name__)
#################################################
# Flask Routes
#################################################


@app.route("/")
def welcome():
    """List all available api routes for appendix."""
    return (
        f"<h1>Available Routes:</h1><br/>"
        "######################################<br/>"
        f"<h2>/general</h2><br/>"
        f"NOTE:This will return all the available data<br/>"
        "-----------------------------------------<br/>"
        f"<h2>/years</h2><br/>"
        f"NOTE:This will return all the available years<br/>"
        "-----------------------------------------<br/>"
        f"<h2>/districts</h2><br/>"
        f"NOTE:This will return all the district names<br/>"
        "-----------------------------------------<br/>"
        f"<h2>/divisions</h2><br/>"
        f"NOTE:This will return all the divisions<br/>"
        "-----------------------------------------<br/>")


####fetch unique years from SQL##########
@app.route("/years")
def listyears():
    #link to DB
    # session = Session(engine)
    # yearsData = session.query(YearsTable)
    # session.close()
    with open('Data/KSI_final.csv', 'r') as f:
        reader = csv.reader(f)
        next(reader)
        data =  []
        for row in reader:
            print(row)
            data.append(
               row[0])
    with open('flask_api/yearsAPI.json','w') as f:
        json.dump(data, f, indent=4)  
    return jsonify(list(set(data)))
    # return jsonify([2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023])


####fetch unique districts from SQL##########
@app.route("/districts")
def listDistricts():
    #link to DB
    # session = Session(engine)
    # districtData = session.query(DistrictTable)
    # session.close()
    with open('Data/districts.csv', 'r') as f:
        reader = csv.reader(f)
        next(reader)
        data =  []
        for row in reader:
            print(row)
            data.append(
               {"id": row[0], "name": row[1]})
        print(len(data))
    with open('flask_api/districtsAPI.json','w') as f:
        json.dump(data, f, indent=4)  
    return jsonify(data)



####fetch unique divisions from SQL##########
@app.route("/divisions")
def listDivisions():
    #link to DB
    # session = Session(engine)
    # districtData = session.query(DistrictTable)
    # session.close()
    with open('Data/divisions.csv', 'r') as f:
        reader = csv.reader(f)
        next(reader)
        data = []
        for row in reader:
            print(row)
            data.append(
               {"id": row[0], "name": row[1]})
    with open('flask_api/divisionsAPI.json','w') as f:
        json.dump(data, f, indent=4)  
    return jsonify(data)




###########################to show kaggle original data###################
@app.route("/general")
def listAllData():
    #link to DB
    # session = Session(engine)
    # districtData = session.query(DistrictTable)
    # session.close()
    with open('Data/KSI_final.csv', 'r') as f:
        reader = csv.reader(f)
        next(reader)
        data = []
        for row in reader:
            data.append(
               {"year": int(row[0]), "date": row[1],"time": row[2],
                "street1": row[3],"road_class": row[4], "latitude": float(row[5]), "longitude": float(row[6]), "loccoord": row[7],
                 "accloc": row[8], "traffctl": row[9], "visibility": row[10], "light": row[11],
                  "rdsfcond": row[12],"acclass": row[13],"impac_type":row[14],"invtype": row[15],"invage": row[16],
                  "injury":row[17],"pedestrian": bool(row[18]),"cyclist":bool(row[19]),"automobile": bool(row[20]),
                  "motorcycle": bool(row[21]),"truck": bool(row[22]),"passenger": bool(row[23]),"speeding": bool(row[24]),
                  "redlight": bool(row[25]),"alcohol": bool(row[26]),"disability": bool(row[27]),"record_id": int(row[28]),
                  "division_id": row[29],"district_id": row[30]  })
           
    with open('flask_api/allDataAPI.json','w') as f:
        json.dump(data, f, indent=4)  
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)