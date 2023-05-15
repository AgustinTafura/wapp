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
var bearerToken = '';

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
    name:'envio_formuarios_variable',
    language:{ code: 'es_AR' },
    components: [
      {
      type: "body",
      parameters: [
          {
              "type": "text",
              "text": "Mi Nombre"
          },
        ]
        }
    //   {
    //     type: 'button',
    //     sub_type: 'url',
    //     index: '0',
    //     parameters: [
    //       {
    //         type: "text",
    //         text: "<ONE-TIME PASSWORD>"
    //       }
    //     ]
    //   },
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
