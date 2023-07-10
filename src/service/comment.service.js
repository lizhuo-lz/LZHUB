const connection = require('../app/database');

class CommentService {
  async create(momentId, content, userId) {
    const statment = `INSERT INTO comment (content, moment_id, user_id) VALUES (?, ?, ?);`;
    const [result] = await connection.execute(statment, [content, momentId, userId]);
    return result
  }

  async reply(momentId, content, userId, comment_id) {
    const statment = `INSERT INTO comment (content, moment_id, user_id, comment_id) VALUES (?, ?, ?, ?);`;
    const [result] = await connection.execute(statment, [content, momentId, userId, comment_id]);
    return result
  }

  async update(momentId, content) {
    const statment = `UPDATE comment SET content= ? WHERE id = ?;`;
    const [result] = await connection.execute(statment, [content, momentId]);
    return result
  }

  async remove(momentId) {
    const statment = `DELETE FROM comment WHERE id = ?;`;
    const [result] = await connection.execute(statment, [momentId]);
    return result
  }

  async getCommentsByMomentId(momentId) {
    const statment = `SELECT 
                      m.id, m.content, m.moment_id, m.createAt createTime,
                      JSON_OBJECT('id', u.id, 'name', u.name) user
                      FROM comment m
                      LEFT JOIN users u ON u.id = m.user_id 
                      WHERE moment_id = ?;`;
    const [result] = await connection.execute(statment, [momentId]);
    return result
  }
}

module.exports = new CommentService(); 