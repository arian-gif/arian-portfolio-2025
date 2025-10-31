const Footer = () => {
  return (
    <footer className="py-8 bg-card/50 backdrop-blur border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground">
            Built with 💡 by{" "}
            <span className="text-gradient-primary font-semibold">Arian Khan</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
