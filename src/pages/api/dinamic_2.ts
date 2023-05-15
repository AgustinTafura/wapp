// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  var botId = '101721479587406';
var phoneNbr = '542244465127';
var bearerToken = 'EAANlKpBhkj8BAIoaIRVJAROwZAS2UEHgaVldtPwVwHyZAxVOefIXa7RgtJne16N0AXqgSN2MlWYceB3HLyv6U17JoAwwyANZArQxPg0E1hq7ZC8tQbqu9Con1d5wpkzZAewZCeluhWDBlSoIkvx9mx4xCxofcK9ViFZB1eNOSLHbqNWZA9e62gXsIQiyVgYguqZCDpT3KnJRAatZAzZBCmZBAC0J';

var url = 'https://graph.facebook.com/v16.0/' + botId + '/messages';
var data = {
  messaging_product: 'whatsapp',
  to: phoneNbr,
  type: 'template',
  // template: {
  //   name:'hello_world',
  //   language:{ code: 'en_US' },
  // }
  template: {
    name:'dinamic_2',
    language:{ code: 'es' },
    components: [
      {
        type: "body",
        parameters: [
          {
              "type": "text",
              "text": "Agustin"
          },
        ]
        },
      {
        type: 'button',
        sub_type: 'url',
        index: '0',
        parameters: [
          {
            type: "text",
            text: "registrations/dashboard/common/230405-arcserve-bootcamp-troubleshooting/br/"
          }
        ]
      },
    ]
  }
};

var postReq = {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + bearerToken,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
  json: true
};

fetch(url, postReq)
  .then(async data => {
    return res.status(200).json(await data.json());
  })
  .then(res => {
    console.log(res)
  })
  .catch(error => res.status(200).json(error));

  
}
