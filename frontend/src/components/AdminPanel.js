import React, { useState, useEffect } from 'react';
import {
  getProjects,
  createProject,
  deleteProject,
  getClients,
  createClient,
  deleteClient,
  getContacts,
  getNewsletters,
} from '../services/api';
import { getBaseUrl } from '../config/api';
import ImageCropper from './ImageCropper';
import './AdminPanel.css';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const [projectForm, setProjectForm] = useState({
    name: '',
    description: '',
    image: null,
  });
  const [showProjectCropper, setShowProjectCropper] = useState(false);

  const [clientForm, setClientForm] = useState({
    name: '',
    designation: '',
    description: '',
    image: null,
  });
  const [showClientCropper, setShowClientCropper] = useState(false);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      switch (activeTab) {
        case 'projects':
          const projectsRes = await getProjects();
          setProjects(projectsRes.data);
          break;
        case 'clients':
          const clientsRes = await getClients();
          setClients(clientsRes.data);
          break;
        case 'contacts':
          const contactsRes = await getContacts();
          setContacts(contactsRes.data);
          break;
        case 'newsletters':
          const newslettersRes = await getNewsletters();
          setNewsletters(newslettersRes.data);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage({ type: 'error', text: 'Failed to fetch data' });
    } finally {
      setLoading(false);
    }
  };

  const handleProjectImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProjectForm({ ...projectForm, image: file });
      setShowProjectCropper(true);
    }
  };

  const handleClientImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setClientForm({ ...clientForm, image: file });
      setShowClientCropper(true);
    }
  };

  const handleProjectSubmit = async (croppedImageBlob) => {
    try {
      const formData = new FormData();
      formData.append('name', projectForm.name);
      formData.append('description', projectForm.description);
      formData.append('image', croppedImageBlob, 'project.jpg');

      await createProject(formData);
      setMessage({ type: 'success', text: 'Project added successfully!' });
      setProjectForm({ name: '', description: '', image: null });
      setShowProjectCropper(false);
      fetchData();
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to add project' });
    }
  };

  const handleClientSubmit = async (croppedImageBlob) => {
    try {
      const formData = new FormData();
      formData.append('name', clientForm.name);
      formData.append('designation', clientForm.designation);
      formData.append('description', clientForm.description);
      formData.append('image', croppedImageBlob, 'client.jpg');

      await createClient(formData);
      setMessage({ type: 'success', text: 'Client added successfully!' });
      setClientForm({ name: '', designation: '', description: '', image: null });
      setShowClientCropper(false);
      fetchData();
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to add client' });
    }
  };

  const handleDeleteProject = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(id);
        setMessage({ type: 'success', text: 'Project deleted successfully!' });
        fetchData();
      } catch (error) {
        setMessage({ type: 'error', text: 'Failed to delete project' });
      }
    }
  };

  const handleDeleteClient = async (id) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      try {
        await deleteClient(id);
        setMessage({ type: 'success', text: 'Client deleted successfully!' });
        fetchData();
      } catch (error) {
        setMessage({ type: 'error', text: 'Failed to delete client' });
      }
    }
  };

  return (
    <div className="admin-panel">
      <header className="admin-header">
        <div className="container">
          <h1>Admin Panel</h1>
          <a href="/" className="back-link">Back to Landing Page</a>
        </div>
      </header>

      <div className="admin-container">
        <div className="admin-sidebar">
          <button
            className={activeTab === 'projects' ? 'active' : ''}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button
            className={activeTab === 'clients' ? 'active' : ''}
            onClick={() => setActiveTab('clients')}
          >
            Clients
          </button>
          <button
            className={activeTab === 'contacts' ? 'active' : ''}
            onClick={() => setActiveTab('contacts')}
          >
            Contact Forms
          </button>
          <button
            className={activeTab === 'newsletters' ? 'active' : ''}
            onClick={() => setActiveTab('newsletters')}
          >
            Newsletter
          </button>
        </div>

        <div className="admin-content">
          {message.text && (
            <div className={`message ${message.type}`}>{message.text}</div>
          )}

          {activeTab === 'projects' && (
            <div className="tab-content">
              <h2>Project Management</h2>
              <div className="form-section">
                <h3>Add New Project</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!projectForm.image) {
                      setMessage({ type: 'error', text: 'Please select an image' });
                      return;
                    }
                  }}
                >
                  <div className="form-group">
                    <label>Project Name</label>
                    <input
                      type="text"
                      value={projectForm.name}
                      onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      value={projectForm.description}
                      onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                      required
                      rows="4"
                    />
                  </div>
                  <div className="form-group">
                    <label>Project Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProjectImageChange}
                      required
                    />
                  </div>
                  {showProjectCropper && projectForm.image && (
                    <ImageCropper
                      imageFile={projectForm.image}
                      onCropComplete={handleProjectSubmit}
                      onCancel={() => {
                        setShowProjectCropper(false);
                        setProjectForm({ ...projectForm, image: null });
                      }}
                      aspectRatio={450 / 350}
                    />
                  )}
                </form>
              </div>

              <div className="list-section">
                <h3>All Projects</h3>
                {loading ? (
                  <p>Loading...</p>
                ) : projects.length > 0 ? (
                  <div className="items-grid">
                    {projects.map((project) => (
                      <div key={project._id} className="item-card">
                        <img
                          src={`${getBaseUrl()}${project.image}`}
                          alt={project.name}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/450x350?text=Project';
                          }}
                        />
                        <div className="item-info">
                          <h4>{project.name}</h4>
                          <p>{project.description}</p>
                          <button
                            className="delete-btn"
                            onClick={() => handleDeleteProject(project._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="no-data">No projects found</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'clients' && (
            <div className="tab-content">
              <h2>Client Management</h2>
              <div className="form-section">
                <h3>Add New Client</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!clientForm.image) {
                      setMessage({ type: 'error', text: 'Please select an image' });
                      return;
                    }
                  }}
                >
                  <div className="form-group">
                    <label>Client Name</label>
                    <input
                      type="text"
                      value={clientForm.name}
                      onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Designation</label>
                    <input
                      type="text"
                      value={clientForm.designation}
                      onChange={(e) => setClientForm({ ...clientForm, designation: e.target.value })}
                      placeholder="e.g., CEO, Web Developer, Designer"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      value={clientForm.description}
                      onChange={(e) => setClientForm({ ...clientForm, description: e.target.value })}
                      required
                      rows="4"
                    />
                  </div>
                  <div className="form-group">
                    <label>Client Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleClientImageChange}
                      required
                    />
                  </div>
                  {showClientCropper && clientForm.image && (
                    <ImageCropper
                      imageFile={clientForm.image}
                      onCropComplete={handleClientSubmit}
                      onCancel={() => {
                        setShowClientCropper(false);
                        setClientForm({ ...clientForm, image: null });
                      }}
                      aspectRatio={450 / 350}
                    />
                  )}
                </form>
              </div>

              <div className="list-section">
                <h3>All Clients</h3>
                {loading ? (
                  <p>Loading...</p>
                ) : clients.length > 0 ? (
                  <div className="items-grid">
                    {clients.map((client) => (
                      <div key={client._id} className="item-card">
                        <img
                          src={`${getBaseUrl()}${client.image}`}
                          alt={client.name}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/450x350?text=Client';
                          }}
                        />
                        <div className="item-info">
                          <h4>{client.name}</h4>
                          <p className="designation">{client.designation}</p>
                          <p>{client.description}</p>
                          <button
                            className="delete-btn"
                            onClick={() => handleDeleteClient(client._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="no-data">No clients found</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'contacts' && (
            <div className="tab-content">
              <h2>Contact Form Details</h2>
              {loading ? (
                <p>Loading...</p>
              ) : contacts.length > 0 ? (
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th>Email Address</th>
                        <th>Mobile Number</th>
                        <th>City</th>
                        <th>Submitted At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map((contact) => (
                        <tr key={contact._id}>
                          <td>{contact.fullName}</td>
                          <td>{contact.email}</td>
                          <td>{contact.mobileNumber}</td>
                          <td>{contact.city}</td>
                          <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="no-data">No contact submissions found</p>
              )}
            </div>
          )}

          {activeTab === 'newsletters' && (
            <div className="tab-content">
              <h2>Newsletter Subscriptions</h2>
              {loading ? (
                <p>Loading...</p>
              ) : newsletters.length > 0 ? (
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Email Address</th>
                        <th>Subscribed At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newsletters.map((newsletter) => (
                        <tr key={newsletter._id}>
                          <td>{newsletter.email}</td>
                          <td>{new Date(newsletter.createdAt).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="no-data">No newsletter subscriptions found</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

