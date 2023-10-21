'use client'
import Image from 'next/image'
import { useDisclosure } from '@mantine/hooks';
import { AppShell } from '@mantine/core';
import TopBar from '@components/TopBar';
import NavSection from '@components/NavSection';
import CourseMenu from '@components/CourseMenu';
import { theme } from '@themes/theme';

export default function Home() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 70}}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="xs"
    >
      <AppShell.Header>
        <TopBar opened={opened} toggle={toggle}/>
      </AppShell.Header>
      <AppShell.Navbar p="xs">
        <NavSection />
      </AppShell.Navbar>
      <AppShell.Main>
        <CourseMenu />
      </AppShell.Main>
    </AppShell>
  );
}
