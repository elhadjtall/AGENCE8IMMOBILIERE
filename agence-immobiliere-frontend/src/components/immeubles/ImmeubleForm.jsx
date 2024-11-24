import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  nom: Yup.string()
    .required('Le nom est requis')
    .min(2, 'Le nom doit contenir au moins 2 caractères'),
  adresse: Yup.string()
    .required('L\'adresse est requise')
    .min(5, 'L\'adresse doit contenir au moins 5 caractères'),
  nombreAppartements: Yup.number()
    .required('Le nombre d\'appartements est requis')
    .min(1, 'Le nombre d\'appartements doit être au moins 1')
});

function ImmeubleForm({ initialValues, onSubmit }) {
  return (
    <Card>
      <Card.Body>
        <Formik
          initialValues={initialValues || {
            nom: '',
            adresse: '',
            nombreAppartements: ''
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            errors
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nom de l'immeuble</Form.Label>
                <Form.Control
                  type="text"
                  name="nom"
                  value={values.nom}
                  onChange={handleChange}
                  isInvalid={touched.nom && errors.nom}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.nom}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Adresse</Form.Label>
                <Form.Control
                  type="text"
                  name="adresse"
                  value={values.adresse}
                  onChange={handleChange}
                  isInvalid={touched.adresse && errors.adresse}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.adresse}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Nombre d'appartements</Form.Label>
                <Form.Control
                  type="number"
                  name="nombreAppartements"
                  value={values.nombreAppartements}
                  onChange={handleChange}
                  isInvalid={touched.nombreAppartements && errors.nombreAppartements}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.nombreAppartements}
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                Enregistrer
              </Button>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
}

export default ImmeubleForm;