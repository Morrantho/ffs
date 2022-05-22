/* Make a lame little component generator, cause I'm lazy. */
typedef void (*fn_p)();

void create()
{

}

void build()
{

}

void quit()
{
	exit(0);
}

static fn_p options[]=
{
	quit,
	create,
	build
};

int main(int nargs,char** args)
{
	return 0;
}