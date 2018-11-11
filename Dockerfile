FROM node:boron
RUN npm install -g bower
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
RUN echo '{ "allow_root": true }' > /root/.bowerrc
COPY bower.json /usr/src/app/
COPY .bowerrc /usr/src/app/
RUN bower install
# Bundle app source
COPY . /usr/src/app
#RUN ember build — environment=production
RUN npm run build

FROM pierrezemb/gostatic
WORKDIR /srv/http
EXPOSE 8043
COPY --from=0 /usr/src/app/dist /srv/http
