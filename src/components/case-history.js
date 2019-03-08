import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';
import NgoCase from './ngo-case';
import LeftUserColumn from './left-user-column';

export default () => (
  <GuestLayout>
    <div className="container p-b-md p-r-md p-l-md">

    <div className="row ">
        <div className="col-md-2 order-md-1 bordered">

        <LeftUserColumn />

        </div>
        <div className="col-md-10 order-md-1 bordered">
        <h4 className="mb-3 page-heading">Case history</h4>

        <NgoCase title="Document authentication - Sri Lanka" details="We require a Sri Lankan expert to authenticate an extract from the Information Book of of a Police Station in Negombo." />
        <NgoCase title="Action Against Prohibited Conduct" details="Support a lawyer who wants to set up a non-profit legal entity or social enterprise in Singapore focused on supporting employees of international organizations who have experienced sexual harassment, discrimination and abuse with pro bono legal advice" />        
        <NgoCase title="Active Global Caregiver" details="Assist a company that ethically sources foreign domestic workers by providing pro bono legal assistance on setting up a charitable legal entity in order to extend their services to low-income families in Hong Kong" />        
        <NgoCase title="Mender of Things" details="Help a young and passionate NGO increase youth awareness of the law and human rights through the arts by providing legal advice and assistance on setting up a legal entity in Hong Kong and applying for section 88 charitable status" />        
        <NgoCase title="Serving Islam Team - Hong Kong" details="Assist a local NGO that helps educate the community on ethnic minorities and which also helps ethnic minorities integrate into the community by providing pro bono legal advice on the appropriate legal entity structure and possible application for section 88 charitable status" />        
        <NgoCase title="StoryTaler" details="Assist a volunteer group focused on promoting mental health in Hong Kong by providing pro bono legal assistance on setting up a legal entity and applying for section 88 charitable status" />        
        <NgoCase title="V Cycle" details="Support a social enterprise focused on environmental issues by providing pro bono legal advice on setting up a board and formalizing its shareholder arrangements" />        
        <NgoCase title="OurConservatory" details="Assist an impact investing intermediary with a mission to bridge the gap between social &amp; commercial by establishing a long term legal partnership to support their Tech for Good incubator programme (NEW!)" />        
      
        
        </div>
      </div>

 

    </div>
  </GuestLayout>
);