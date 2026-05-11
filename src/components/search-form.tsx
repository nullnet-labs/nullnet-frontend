
export default function SearchForm() {
    return (
        <form className="mx-auto my-4 flex items-center" style={{width: 'calc(100% - var(--spacing) * 10)'}}>
            <button type="submit" className="px-4 py-1 accent-bordered-btn hover-btn cursor-pointer">
                Search
            </button>
            <input
                type="text"
                placeholder="Search example: fansite no_ads -is_storefront"
                className="px-2 py-1 mx-1 accent-bordered-btn flex-1"
                style={{boxShadow: '0 0 12px var(--primary-accent)'}}
            />
            <button type="submit" className="px-4 py-1 accent-bordered-btn hover-btn cursor-pointer">
                Search
            </button>
        </form>
    );
}
