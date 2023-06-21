import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../components/Auth/AuthProvider';

export default function ProtectedRouter({ path, component }) {

    const auth = useAuth();
    
    return auth ? <Outlet /> : <Navigate to="/" />

}