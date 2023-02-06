import useOwner from '../../hooks/useOwner';

export default async function Callback(req, res) {
  const callbackToken = '8Ytb7a33CDqPds140tmGkLeewnlF1DW8EHLljx3OKS8xMbdz';
  const xCallbackToken = req.headers['x-callback-token'];
  const httpMethod = req.method;
  
  switch (httpMethod) {
    case 'POST':
      if (xCallbackToken !== callbackToken) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      } else {
        const badan = req.body;
        try {

          const contract = useOwner();
          await contract.storePG(badan.external_id, badan.payment_method, badan.amount, badan.status, badan.currency, badan.payment_channel, badan.payer_email)
        } catch(err) {
          console.log(err)
        }
        res.status(200).json({ body: req.body });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${httpMethod} Not Allowed`);
      return;
  }
}