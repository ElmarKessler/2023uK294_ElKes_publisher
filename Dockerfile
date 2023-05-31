FROM node:latest
# install jq package
WORKDIR /usr/app
RUN apt-get update && apt-get install -y jq
COPY jsons/*.json ./json_files/
COPY routes.json .
# merge the json's to one file named db.json
RUN jq -s 'reduce .[] as $item ({}; . * $item)' json_files/* > db.json
RUN rm -rf json_files
# install the packages
RUN yarn global add json-server json-server-auth
EXPOSE 3000
ENTRYPOINT ["json-server-auth","--watch","db.json", "-H", "0.0.0.0", "-r", "routes.json" ]
CMD []
