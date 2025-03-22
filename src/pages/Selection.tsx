
import React from 'react';
import AnimatedTransition from '@/components/AnimatedTransition';
import Layout from '@/components/Layout';
import SelectionForm from '@/components/SelectionForm';

const Selection: React.FC = () => {
  return (
    <Layout>
      <AnimatedTransition>
        <SelectionForm />
      </AnimatedTransition>
    </Layout>
  );
};

export default Selection;
