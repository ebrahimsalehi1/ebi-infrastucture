drop table fbe_psn_persons;
create table fbe_psn_persons(
    person_id number(15) generated by default on null as identity start with 1 increment by 1 ,
    nam_first_prson varchar2(50 char), nam_last_prson varchar2(100 char),dat_birth_prson date,
cod_nat_prson varchar2(15 char),cod_passport_prson varchar2(50 char),cod_econom_prson varchar2(50 char),cod_meli_prson varchar2(50 char)
);

drop table fbe_org_organizations;
create table fbe_org_organizations(
    organization_id number(15) generated by default on null as identity start with 1 increment by 1,
    nam_organization_organ varchar2(100 char),nam_organization_en_organ varchar2(100 char),
    lkp_typ_organ varchar2(30 char),flg_active_organ number(1) default 1,cod_organ varchar2(5 char),
    org_id number,chart_id number,unit_id number);

drop table fbe_org_organization_contacts;
create table fbe_org_organization_contacts(
    organization_contact_id number(15)  generated by default on null as identity start with 1 increment by 1,
    organ_organization_id number(15),lkp_type_orgcn varchar2(30 char),des_info_orgcn varchar2(100 char));

drop table fbe_org_organization_hierarchies;
create table fbe_org_organization_hierarchies(
    organization_hierarchy_id number(15) generated by default on null as identity start with 1 increment by 1,
    organ_organization_parent_id number(15),organ_organization_child_id number(15),
    lkp_typ_direct_orghi varchar2(30 char) default 'USUAL',
    dat_str_orghi date,dat_end_orghi date
);

drop table fbe_org_position_types;
create table fbe_org_position_types(
    position_type_id number(15) generated by default on null as identity start with 1 increment by 1,
    nam_position_pstyp varchar2(100 char));

drop table fbe_org_positions;
create table fbe_org_positions(
    position_id number(15) generated by default on null as identity start with 1 increment by 1,
    nam_position_posit varchar2(100 char),pstyp_position_type_id number(15),
    flg_is_manager_posit number(1),flg_reassign_task_posit  number(1)
    );

drop table fbe_org_position_hierarchies;
create table fbe_org_position_hierarchies(
    position_hierarchy_id number(15) generated by default on null as identity start with 1 increment by 1,
    posit_position_parent_id number(15),posit_position_child_id number(15));

drop table fbe_atn_users;
create table fbe_atn_users(
    user_id number(15) generated by default on null as identity start with 1 increment by 1,
    nam_name_users varchar2(50 char),nam_pass_users varchar2(50 char),flg_active_users number(1),
prson_person_id number(15));

-----------------------------------------------------------------********************************************************

drop table fbe_atz_groups;
create table fbe_atz_groups(
    group_id number(15) generated by default on null as identity start with 1 increment by 1,
    nam_title_group varchar2(50 char));

drop table fbe_atz_roles;
create table fbe_atz_roles(
    role_id number(15) generated by default on null as identity start with 1 increment by 1,
    nam_title_roles varchar2(50 char));

drop table fbe_atz_registered_modules;
create table fbe_atz_registered_modules(
    registered_module_id number(15) generated by default on null as identity start with 1 increment by 1,
    nam_module_rgmdl varchar2(50 char),nam_short_module_rgmdl varchar2(10 char));

drop table fbe_atz_menus;
create table fbe_atz_menus(
    menu_id number(15) generated by default on null as identity start with 1 increment by 1,
    nam_title_menus varchar2(50 char),nam_desc_menus varchar2(500 char),menus_menu_id number(15),des_route_menus varchar2(500 char));

drop table fbe_atz_web_services;
create table fbe_atz_web_services(
    web_service_id number(15) generated by default on null as identity start with 1 increment by 1,
    nam_title_websr varchar2(50 char),nam_desc_websr varchar2(500 char),des_route_websr varchar2(500 char),lkp_typ_websr varchar2(30 char));

drop table fbe_atz_services;
create table fbe_atz_services(
    service_id number(15) generated by default on null as identity start with 1 increment by 1,
    nam_title_srvic varchar2(50 char),nam_desc_srvic varchar2(500 char),rgmdl_registered_module_id number(15),
    menus_menu_id number(15));

drop table fbe_atz_service_permissions;
create table fbe_atz_service_permissions(
    service_permission_id number(15) generated by default on null as identity start with 1 increment by 1,
    srvic_service_id number(15),
    roles_role_id number(15),group_group_id number(15),
    organ_organization_id number(15),posit_position_id number(15),pstyp_position_type_id number(15),
    users_user_id number(15),dat_str_atrel date,dat_end_atrel date
    );
