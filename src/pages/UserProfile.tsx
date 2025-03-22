
import React from 'react';
import AnimatedTransition from '@/components/AnimatedTransition';
import Layout from '@/components/Layout';
import ProfileForm from '@/components/ProfileForm';

const UserProfile: React.FC = () => {
  return (
    <Layout>
      <AnimatedTransition>
        <ProfileForm />
      </AnimatedTransition>
    </Layout>
  );
};

export default UserProfile;
