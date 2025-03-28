import { Client } from 'pg';

export default async function handler(req, res) {
  if (req.method === 'PATCH') {
    console.log('req.body', req.body);
    const { 
      memberId,          // 用作 memberId
      experienment,
      age,
      kidCount,
      way,
      scenario,
      environmentPic,
      serviceLocation,
      introduction,
      service,
      score,
      isShow,
      location,
      kycId,
      uploadId,
      nannyId,
      suddenlyId,
      longTermId
    } = req.body;

    const client = new Client({
      connectionString: process.env.POSTGRES_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });

    try {
      await client.connect();

      const query = `
        UPDATE  nanny 
        SET
          memberId = $1,
          experienment = $2,
          age = $3,
          kidCount = $4,
          way = $5,
          scenario = $6,
          environmentPic = $7,
          serviceLocation = $8,
          introduction = $9,
          service = $10,
          score = $11,
          isShow = $12,
          location = $13,
          kycid = $14,
          uploadId = $15,
          suddenly_id = $16,
          long_tern_id = $17,
          created_ts = NOW()
        WHERE id = $18
        RETURNING *;
      `;
      const values = [
        memberId,        // memberId
        experienment,
        age,
        kidCount,
        way,
        scenario,
        environmentPic,
        serviceLocation,
        introduction,
        service,
        score,
        isShow,
        location,
        kycId,
        uploadId,
        suddenlyId,
        longTermId,
        nannyId
      ];
      const result = await client.query(query, values);
      console.log('values', values);
      console.log('Nanny updated successfully:', result.rows[0]);
      return res.status(201).json({ success: true, nanny: result.rows[0] });
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Database error' });
    } finally {
      await client.end();
    }
  } else {
    res.setHeader('Allow', ['PATCH']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}