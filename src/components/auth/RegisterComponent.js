import React from 'react'
import withRouter from '../common/withRouter';
import ParticlesAuth from '../../HOC/ParticlesAuth';

const RegisterComponent = () => {
  return (
    <ParticlesAuth>
      <div>RegisterComponent</div>
    </ParticlesAuth>
  )
}

export default withRouter(RegisterComponent);
