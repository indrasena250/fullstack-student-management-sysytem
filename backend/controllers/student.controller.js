const db = require('../models');
const Student = db.Student;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, email, password, classId } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const student = await Student.create({ name, email, password: hash, classId });
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const student = await Student.findOne({ where: { email } });
    if (!student) return res.status(404).json({ message: "Student not found" });

    const isValid = await bcrypt.compare(password, student.password);
    if (!isValid) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: student.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({ include: 'class' });
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
