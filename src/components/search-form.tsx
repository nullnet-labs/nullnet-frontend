


export default function SearchForm() {


    return (
        <search className="mx-auto my-6" style={{ width: 'calc(100% - var(--spacing) * 10)' }}>
            <form action="posts" className="flex items-center">
                <button type="submit" className="px-6 py-3 md:px-4 md:py-1 accent-bordered-btn hover-btn cursor-pointer">
                    Search
                </button>
                <input
                    type="search"
                    name="q"
                    placeholder="Search example: fansite no_ads -is_storefront"
                    className="px-2 py-3 mx-3 md:px-2 md:py-1 md:mx-1 accent-bordered-btn flex-grow-1"
                    style={{boxShadow: '0 0 12px var(--primary-accent)'}}
                />
                <button type="submit" className="px-6 py-3 md:px-4 md:py-1 accent-bordered-btn hover-btn cursor-pointer">
                    Search
                </button>
            </form>
        </search>
    );
}
