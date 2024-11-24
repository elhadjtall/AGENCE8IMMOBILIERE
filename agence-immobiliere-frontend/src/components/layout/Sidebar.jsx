import React from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  return (

    // tableau de bord pour l'admin
    <Nav className="flex-column bg-light p-3 h-100">
      <Nav.Link onClick={() => navigate('/admin/dashboard')}>Tableau de bord</Nav.Link>
      <Nav.Link onClick={() => navigate('/admin/immeubles')}>Gestion Immeubles</Nav.Link>
      <Nav.Link onClick={() => navigate('/admin/appartements')}>Gestion Appartements</Nav.Link>
      <Nav.Link onClick={() => navigate('/admin/clients')}>Gestion Clients</Nav.Link>
      <Nav.Link onClick={() => navigate('/admin/ventes')}>Gestion Ventes</Nav.Link>
    </Nav>
  );
}

export default Sidebar;