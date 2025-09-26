import StaggeredMenu from '@/components/ui/StaggeredMenu';

const Navigation = () => {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
    { label: 'Services', ariaLabel: 'View our services', link: '#services' },
    { label: 'Portfolio', ariaLabel: 'View our work', link: '#portfolio' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'GitHub', link: 'https://github.com' }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-screen pointer-events-none">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={['#000000', '#111111', '#1a1a1a']}
        accentColor="#fff"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
    </div>
  );
};

export default Navigation;