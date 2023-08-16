-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE Incident_Record (
    YEAR int   NOT NULL,
    DATE date   NOT NULL,
    TIME float(32)   NOT NULL,
    STREET1 varchar(200)   NOT NULL,
    ROAD_CLASS varchar(200)   NOT NULL,
    LATITUDE float(32)   NOT NULL,
    LONGITUDE float(32)   NOT NULL,
    LOCCOORD varchar(200)   NOT NULL,
    ACCLOC varchar(200)   NOT NULL,
    TRAFFCTL varchar(200)   NOT NULL,
    VISIBILITY varchar(200)   NOT NULL,
    LIGHT varchar(200)   NOT NULL,
    RDSFCOND varchar(200)   NOT NULL,
    ACCLASS varchar(200)   NOT NULL,
    IMPACTYPE varchar(200)   NOT NULL,
    INVTYPE varchar(200)   NOT NULL,
    INVAGE varchar(200)   NOT NULL,
    INJURY varchar(200)   NOT NULL,
    PEDESTRIAN boolean   NOT NULL,
    CYCLIST boolean   NOT NULL,
    AUTOMOBILE boolean   NOT NULL,
    MOTORCYCLE boolean   NOT NULL,
    TRUCK boolean   NOT NULL,
    PASSENGER boolean   NOT NULL,
    SPEEDING boolean   NOT NULL,
    REDLIGHT boolean   NOT NULL,
    ALCOHOL boolean   NOT NULL,
    DISABILITY boolean   NOT NULL,
    Record_ID int   NOT NULL,
    division_id varchar(200)   NOT NULL,
    district_id varchar(200)   NOT NULL,
    CONSTRAINT pk_Incident_Record PRIMARY KEY (
        Record_ID
     )
);

CREATE TABLE Divisions (
    division_id varchar(200)   NOT NULL,
    DIVISION varchar(200)   NOT NULL,
    CONSTRAINT pk_Divisions PRIMARY KEY (
        division_id
     )
);

CREATE TABLE Districts (
    district_id varchar(200)   NOT NULL,
    DISTRICT varchar(200)   NOT NULL,
    CONSTRAINT pk_Districts PRIMARY KEY (
        district_id
     )
);

ALTER TABLE Incident_Record ADD CONSTRAINT fk_Incident_Record_division_id FOREIGN KEY(division_id)
REFERENCES Divisions (division_id);

ALTER TABLE Incident_Record ADD CONSTRAINT fk_Incident_Record_district_id FOREIGN KEY(district_id)
REFERENCES Districts (district_id);

