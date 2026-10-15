FROM maven:3.9-eclipse-temurin-17 AS build

WORKDIR /workspace
COPY pom.xml .
COPY src ./src
RUN mvn -B -DskipTests package

FROM tomcat:9-jdk17-temurin

RUN rm -rf /usr/local/tomcat/webapps/*
COPY --from=build /workspace/target/Doctor-Patient-Portal.war /usr/local/tomcat/webapps/ROOT.war

EXPOSE 8080
