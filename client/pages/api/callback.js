export default function Callback(req, res) {
  const callbackToken = '8Ytb7a33CDqPds140tmGkLeewnlF1DW8EHLljx3OKS8xMbdz';
  const xCallbackToken = req.headers['x-callback-token'];
  const httpMethod = req.method;
  const statusXendit = [];

  switch (httpMethod) {
    case 'GET':
      console.log(statusXendit);
      res.status(200).json({ statusXendit });
      return;
    case 'POST':
      if (xCallbackToken !== callbackToken) {
        res.status(401).json({ error: 'Unauthorized' }); // <-- Pasti kena unauthorized kalau di hit dari client side
        return;
      } else {
        statusXendit.push(req.body);
        res.status(200).json({ status });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${httpMethod} Not Allowed`);
      return;
  }
}
