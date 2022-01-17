import * as bcrypt from 'bcryptjs';
import * as Knex from 'knex';

import {
  UsersModel,
  ProjectModel,
  HeroModel,
  ContentModel,
  CarouselModel,
  FormModel,
} from '../../../model/src';
export async function seed(knex: Knex): Promise<void> {
  const password = await bcrypt.hash('wildan', 10);

  // Create users
  await UsersModel.query(knex).insert([
    {
      id: 1,
      name: 'wildan',
      username: 'wildan',
      admin: true,
      email: 'wildan@gmail.com',
      password,
    },
  ]);

  // Create project with corresponding user
  await ProjectModel.query(knex).insert([
    {
      id: 1,
      user_id: 1,
      project_name: 'Blog Pecinta Loli',
    },
  ]);

  // Create Hero with corresponding project
  await HeroModel.query(knex).insert([
    {
      id: 1,
      project_id: 1,
      header: 'Komunitas Pecinta Loli',
      subheader: 'komunitas pecinta loli',
      image_url: 'http://terserah',
    },
  ]);

  // Create Carousel with it corresponding sites
  await CarouselModel.query(knex).insert([
    {
      id: 1,
      project_id: 1,
      header: 'Kegiatan Komunitas Pecinta Loli',
      subheader: 'kami mengadakan event peluk loli',
      image_url: 'http://terserah',
    },
    {
      id: 2,
      project_id: 1,
      header: 'Kegiatan Komunitas Pecinta Loli',
      subheader: 'kami mengadakan event tangkap pedo',
      image_url: 'http://terserah',
    },
  ]);

  // Create Content with it corresponding sites
  await ContentModel.query(knex).insert([
    {
      id: 1,
      project_id: 1,
      header: 'Konten Komunitas Pecinta Loli',
      subheader: 'komunitas pecinta loli',
      image_url: 'http://terserah',
    },
  ]);

  // Create Content with it corresponding sites
  await FormModel.query(knex).insert([
    {
      id: 1,
      project_id: 1,
    },
  ]);
}
