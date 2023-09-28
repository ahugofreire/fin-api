FROM node:20-slim

WORKDIR /home/node/app

# ENV DOCKERIZE_VERSION v.0.6.1
# RUN wget https://github.com/jwilber/dockerize/releases/downlaod/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#     && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#     && rm  dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN npm install -g @nestjs/cli
USER node

#RUN npm install

CMD [ "tail", "-f", "/dev/null" ]



