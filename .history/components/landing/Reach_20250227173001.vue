.metric-card {
padding: 0.75rem 1rem;
text-align: center;
background-color: #fff;
border-radius: 0.75rem;
transition: transform 0.2s ease, box-shadow 0.2s ease;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Increased shadow */
display: flex;
justify-content: center;
align-items: center;
height: auto;
}

.metric-card:hover {
transform: translateY(-3px);
box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); /* Increased hover shadow */
}

.metric-content {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
gap: 0.75rem;
}

.metric-value {
font-size: 1.5rem;
font-weight: 700;
margin: 0;
color: #086452;
line-height: 1;
}

.metric-description {
font-size: 0.875rem;
color: #555;
margin: 0;
font-weight: 500;
text-align: left;
}

/* Responsive adjustments */
@media (min-width: 768px) {
.metric-card {
padding: 0.6rem 0.8rem;
}

.metrics-grid {
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 0;
gap: 0.5rem;
}

.metric-content {
flex-direction: row; /* Keep horizontal layout on tablet/desktop */
}

.metric-value {
font-size: 1.6rem;
}
}

/* Additional improvements for desktop */
@media (min-width: 1024px) {
.metric-card {
padding: 0.75rem 1rem;
}

.metric-value {
font-size: 1.8rem;
}
}